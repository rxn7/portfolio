export declare type ProjectData = {
    name: string
    categories?: string[]
    icon?: {
        src: string,
        pixelArt?: boolean,
    },
    showWebsitePreview?: boolean,
    displayName: string
    description: string
    detailedDescription?: string
    srcUrl?: string
    websiteUrl?: string
    downloadUrl?: string
    status?: string
    screenshots?: string[]
    videosEmbedIDs?: string[]
}

export type ProjectIconProps = {
    project: ProjectData
    size?: number
} | React.ComponentProps<any>;

export function ProjectIcon(props: ProjectIconProps): JSX.Element {
    if(!props.project.icon)
        return <></>

    const size: number = props.size || 128

    return <img src={props.project.icon.src} width={size} height={size} alt='icon' style={{imageRendering: props.project.icon.pixelArt ? 'pixelated' : 'auto'}}/>
}
