export interface youTubeResponse {
  "pageInfo": {
    "totalResults": number,
    "resultsPerPage": number
  }
  "items": videoItem[]
}
export interface videoItem {
  "id": string,
  "snippet": {
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
