import React from 'react';
import { Music, Users, Radio, Zap, Play, ArrowRight, Mic, Headphones } from 'lucide-react';
import Appbar from './components/Appbar';
import Redirect from './components/Redirect';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Redirect />
      <header className="relative z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <Appbar />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Fans</span> Choose the Music
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Interactive music streaming where your audience picks the soundtrack in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center">
              <Mic className="w-5 h-5 mr-2" />
              Start as Creator
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center">
              <Headphones className="w-5 h-5 mr-2" />
              Join as Fan
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-gray-400">Active Creators</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-gray-400">Songs Played Daily</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">StreamTune</span>?
            </h2>
            <p className="text-xl text-gray-400">Built for creators and their communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fan-Driven Playlists</h3>
              <p className="text-gray-400">Your audience votes and requests songs in real-time.</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Live Integration</h3>
              <p className="text-gray-400">Works with Twitch, YouTube, and Discord seamlessly.</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Response</h3>
              <p className="text-gray-400">Lightning-fast song switching keeps content flowing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Get started in minutes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Creators */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Mic className="w-6 h-6 mr-3 text-purple-400" />
                For Creators
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Connect Your Platform</h4>
                    <p className="text-gray-400">Link Twitch, YouTube, or Discord in seconds.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Set Preferences</h4>
                    <p className="text-gray-400">Choose music style and moderation settings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Go Live</h4>
                    <p className="text-gray-400">Start streaming with fan-curated music.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Fans */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Headphones className="w-6 h-6 mr-3 text-pink-400" />
                For Fans
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Join a Stream</h4>
                    <p className="text-gray-400">Find your favorite creator&apos;s stream.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Request & Vote</h4>
                    <p className="text-gray-400">Submit songs and vote on what plays next.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Shape the Vibe</h4>
                    <p className="text-gray-400">Influence the stream&apos;s musical atmosphere.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join creators and fans building the future of interactive streaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group text-white hover:text-gray-300 transition-colors flex items-center justify-center text-lg underline underline-offset-4">
              Watch Demo
              <Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">StreamTune</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 StreamTune. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;