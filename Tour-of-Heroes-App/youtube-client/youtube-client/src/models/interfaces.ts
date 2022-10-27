export interface youTubeResponse {
  "kind": string,
  "etag": string,
  "pageInfo": {
    "totalResults": number,
    "resultsPerPage": number
  }
  "items": videoItem[]
}
export interface videoItem {
  "kind": string,
  "etag": string,
  "id": string,
  "snippet": {
    "categoryId": string,
    "liveBroadcastContent": string,
    "localized": {
      "title": string,
      "description": string
    },
    "defaultAudioLanguage": string,
    "defaultLanguage"?: string,
    "publishedAt": string,
    "channelId": string,
    "title": string,
    "description": string,
    "thumbnails": {
      "default": {
        "url": string,
        "width": number,
        "height": number
      },
      "medium": {
        "url": string,
        "width": number,
        "height": number
      },
      "high": {
        "url": string,
        "width": number,
        "height": number
      },
      "standard": {
        "url": string,
        "width": number,
        "height": number
      },
      "maxres": {
        "url": string,
        "width": number,
        "height": number
      }
    },
    "channelTitle": string,
    "tags": string[],
  },
  "statistics": {
    "viewCount": string,
    "likeCount": string,
    "dislikeCount": string,
    "favoriteCount": string,
    "commentCount": string
  }
}
