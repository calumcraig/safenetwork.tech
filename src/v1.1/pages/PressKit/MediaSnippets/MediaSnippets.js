import React from 'react'

import InterviewRequest from '../InterviewRequest'
import MediaSnippet from '../MediaSnippet'

import { genRandomKey } from 'src/utils'

import './mediaSnippets.sass'

const MediaSnippetContainer = props => {
  const { interviewRequest, mediaData } = props

  return (
    <div className="mediaSnippets">
      <div className="mediaSnippets__wrap">
        <InterviewRequest
          className="mediaSnippets__item"
          data={interviewRequest}
        />
        {
          mediaData.map(media => <MediaSnippet key={genRandomKey()} {...media} />)
        }
        <div className="mediaLogos">{' '}</div>
        <div className="interviewReq__bg">{' '}</div>
        <div className="techCrunch__bg">{' '}</div>
      </div>
    </div>
  )
}

export default MediaSnippetContainer
