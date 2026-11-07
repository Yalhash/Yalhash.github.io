#!/usr/bin/env ruby
# frozen_string_literal: true

# Downloads the latest resume.pdf from the main branch of github.com/Yalhash/resume
# into the site root, so the site never stores its own copy.
#
# Run it before building or serving locally:
#   ruby scripts/fetch_resume.rb
#
# The GitHub Actions deploy workflow runs it on every build.
# Override the source with RESUME_REPO, RESUME_BRANCH or RESUME_FILE if needed.

require "net/http"
require "uri"

repo   = ENV.fetch("RESUME_REPO", "Yalhash/resume")
branch = ENV.fetch("RESUME_BRANCH", "main")
file   = ENV.fetch("RESUME_FILE", "resume.pdf")
dest   = File.expand_path("../resume.pdf", __dir__)

# Net::HTTP only reads http_proxy on its own; honour https_proxy too.
def proxy
  value = ENV["https_proxy"] || ENV["HTTPS_PROXY"]
  value && !value.empty? ? URI(value) : nil
end

def fetch(uri, redirects_left = 5)
  raise "Too many redirects" if redirects_left.zero?

  p = proxy
  http = Net::HTTP.new(uri.host, uri.port, p&.host, p&.port, p&.user, p&.password)
  http.use_ssl = uri.scheme == "https"
  response = http.request(Net::HTTP::Get.new(uri))
  case response
  when Net::HTTPSuccess then response.body
  when Net::HTTPRedirection then fetch(URI(response["location"]), redirects_left - 1)
  else raise "#{uri} returned HTTP #{response.code}"
  end
end

uri = URI("https://raw.githubusercontent.com/#{repo}/#{branch}/#{file}")
puts "Fetching #{uri}"

begin
  body = fetch(uri)
rescue StandardError => e
  abort "Could not download the resume: #{e.message}"
end

abort "Downloaded file is not a PDF (#{body.bytesize} bytes); not writing it." unless body.start_with?("%PDF")

File.binwrite(dest, body)
puts "Saved #{body.bytesize / 1024} KB to #{dest}"
