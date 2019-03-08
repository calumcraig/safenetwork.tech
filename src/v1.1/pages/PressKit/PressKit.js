import React from 'react'

import Banner from './Banner'
import TextSnippets from './TextSnippets'
import MediaSnippets from './MediaSnippets'
import Download from './Download'
import CONSTANT from 'src/v1.1/constant'

import TheGuardian from "images/news_1.png"
import TechCrunch from "images/news_2.png"
import Spectrum from "images/news_3.png"
import SNLogoBlack from 'images/downloads/safe_network_logo_black.png'
import SNLogoWhite from 'images/downloads/safe_network_logo_white.png'
import SNIconBlack from 'images/downloads/safe_network_icon_black.png'
import SNIconWhite from 'images/downloads/safe_network_icon_white.png'
import ImagePackCover from 'images/downloads/image_pack_cover.jpg'

import content from './content.json'
import './pressKit.sass'

const PressKit = () => {
  const assetLogos = [
    {
      imgSrc: SNLogoBlack,
      imgAlt: 'Safe Network logo black',
      downloadLink: CONSTANT.downloadLinks.logos.safeNetworkLogoBlack,
    },
    {
      imgSrc: SNLogoWhite,
      imgAlt: 'Safe Network logo white',
      downloadLink: CONSTANT.downloadLinks.logos.safeNetworkLogoWhite,
    },
    {
      imgSrc: SNIconBlack,
      imgAlt: 'Safe Network icon black',
      downloadLink: CONSTANT.downloadLinks.logos.safeNetworkIconBlack,
    },
    {
      imgSrc: SNIconWhite,
      imgAlt: 'Safe Network icon white',
      downloadLink: CONSTANT.downloadLinks.logos.safeNetworkIconWhite,
    },
  ]

  const imagePack = {
    imgSrc: ImagePackCover,
    imgAlt: 'Safe Network icon white',
    downloadLink: CONSTANT.downloadLinks.imagePack,
  }

  const documents = {
    parsecWhitePaper: CONSTANT.downloadLinks.documents.parsecWhitePaper,
    primer: CONSTANT.downloadLinks.documents.primer,
  }

  const textSnippetData = [{
    id: 'pressIntro',
    text: content.copyText1.para,
    textSize: 'L',
    canCopy: true,
    copyButtonType: 'primary'
  }, {
    id: 'projectAim',
    title: content.copyText2.title,
    text: content.copyText2.para,
    canCopy: true,
    copyButtonType: 'grey'
  }, {
    id: 'aboutSafecoin',
    title: content.copyText3.title,
    text: content.copyText3.para,
    canCopy: true,
    copyButtonType: 'grey'
  }, {
    id: 'pressFreedom',
    title: content.textSnippet1.title,
    titleSize: 'H2',
    text: content.textSnippet1.para
  }, {
    id: 'revenueStream',
    title: content.textSnippet2.title,
    titleSize: 'H3',
    text: content.textSnippet2.para
  }]

  const MediaSnippetData = [{
    id: 'techCrunch',
    content: content.techCrunch,
    imgSrc: TechCrunch,
    imgTitle: 'Tech Crunch'
  }, {
    id: 'theGuardian',
    content: content.theGuardian,
    imgSrc: TheGuardian,
    imgTitle: 'The Guardian'
  }, {
    id: 'spectrum',
    content: content.spectrum,
    imgSrc: Spectrum,
    imgTitle: 'Spectrum'
  }]

  return (
    <section className="pressKit">
      <div className="pressKit__wrap">
        <Banner title={content.pageTitle} />
        <TextSnippets data={textSnippetData} />
        <MediaSnippets
          interviewRequest={content.interviewRequest}
          mediaData={MediaSnippetData}
        />
        <Download
          data={content.downloads}
          logos={assetLogos}
          imagePack={imagePack}
          documents={documents}
        />
      </div>
    </section>
  )
}

export default PressKit
