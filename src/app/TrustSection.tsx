'use client';
import Image from'next/image';

const TrustSection = () => {
  const features = [
    {
      icon: '/images/img_image.png',
      title: 'Worldwide Delivery',
      description: '200 countries and regions\nworldwide'
    },
    {
      icon: '/images/img_image_46x48.png',
      title: 'Secure Payment',
      description: 'Pay with popular and secure\npayment methods'
    },
    {
      icon: '/images/img_image_48x48.png',
      title: '60-day Return Policy',
      description: 'Merchandise must be returned within 60 days.'
    },
    {
      icon: '/images/img_image_54x58.png',
      title: '24/7 Help Center',
      description: 'We will respond to you within\n24 hours'
    }
  ]

  return (
    <section className="w-full bg-background-main py-8 md:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[130px]">
        <div className="bg-primary-background rounded-[20px] p-6 lg:p-[26px] lg:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {features.map((feature, index) => (
              <div key={feature.title} className="flex flex-col sm:flex-row lg:flex-row items-start gap-4 lg:gap-[16px]">
                <div className="flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={index === 0 ? 58 : index === 1 ? 48 : index === 2 ? 48 : 58}
                    height={index === 0 ? 52 : index === 1 ? 46 : index === 2 ? 48 : 54}
                    className={`${
                      index === 0 ? 'w-[48px] h-[42px] lg:w-[58px] lg:h-[52px]' :
                      index === 1 ? 'w-[38px] h-[36px] lg:w-[48px] lg:h-[46px]' :
                      index === 2 ? 'w-[38px] h-[38px] lg:w-[48px] lg:h-[48px]': 'w-[48px] h-[44px] lg:w-[58px] lg:h-[54px]'
                    } object-contain`}
                  />
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-normal leading-tight lg:leading-[26px] text-primary-foreground font-['Nunito'] mb-2 lg:mb-[2px]">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[21px] text-primary-foreground font-['Nunito'] whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection