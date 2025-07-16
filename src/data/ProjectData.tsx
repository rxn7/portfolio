export type ProjectData = {
	name: string
	categories?: string[]
	banner?: {
		src: string
		pixelArt?: boolean
	}
	showWebsitePreview?: boolean
	displayName: string
	description: string
	detailedDescription?: string
	srcUrl?: string
	websiteUrl?: string
	downloadUrl?: string
	status?: string
	yearStart?: number,
	yearEnd?: number,
	screenshots?: string[]
	videosEmbedIDs?: string[]
}
