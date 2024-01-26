import React from 'react'
import Title from '../components/ui/tag/title'
import { Layout } from '../components'

const Contact = () => {
  return (
   <Layout 
   title={`Contact`}
   subtitle={`Contact`}
   description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
   link={`https://auto-tuning.vercel.app/contact`}>
     <div className='max-w-[1280px] mx-auto min-h-[40vh] flex flex-col py-[30px]'>
        <Title>Контакты</Title>
    </div>
   </Layout>
  )
}

export default Contact