import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

interface VideoCarouselProps {
  videos: string[]
  vertical?: boolean
}

// Utility to convert Shorts or watch URLs to embeddable form
const getEmbedUrl = (url: string) => {
  try {
    const shortMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/)
    const watchMatch = url.match(/v=([a-zA-Z0-9_-]+)/)
    const id = shortMatch?.[1] || watchMatch?.[1]
    return id ? `https://www.youtube.com/embed/${id}` : url
  } catch {
    return url
  }
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos, vertical = false }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Découvrez en vidéo</h2>

      <Swiper
        spaceBetween={20}
        navigation
        loop={true}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        className="overflow-visible"
      >
        {videos.map((videoUrl, index) => (
          <SwiperSlide key={index}>
            <div
              className={`rounded-lg overflow-hidden shadow-lg ${
                vertical ? 'aspect-[9/16]' : 'aspect-video'
              }`}
            >
              <iframe
                src={getEmbedUrl(videoUrl)}
                title={`Video ${index + 1}`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default VideoCarousel
