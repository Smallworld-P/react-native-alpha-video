declare module 'react-native-alpha-video' {
    import React from 'react'
    import { ViewProps } from 'react-native'

    export interface IAlphaViewProps extends ViewProps {
        // 视频播放完成后，回调
        onDidPlayFinish?: () => void
        // URL，或是本地 NSBundle.mainBundle / assets 文件
        source?: string
        // 是否循环播放,默认不循环
        loop?: boolean
        // 是否静音,默认不静音
        muted?: number
    }
    export class AlphaVideoView extends React.Component<IAlphaViewProps, any> {
        constructor(props: Readonly<IAlphaViewProps>)
        // 播放
        static play:() => void
        // 暂停
        static pause:() => void
        // 释放
        static clear:() => void
    }

    export class AlphaVideoModule {
        // 预加载
        static advanceDownload(urls: Array<String>): void
    }
}
