module.exports = {
    markdown: {
        lineNumbers: true
    },
    title       : 'Programming note',
    description : '각종 프로그래밍을 빠르게 시작하기 위한 노트정리',
    themeConfig: {
        nav: [
            { text: 'Home',    link: '/' },
            { text: 'Blog',    link: '/blog/' },
            { text: 'Programming', link: '/programming/' }
        ], 
        sidebar: [
            '/',
            '/blog/',
            '/programming/' 
        ]
    }
}