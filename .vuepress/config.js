module.exports = {
    markdown: {
        lineNumbers: true,
        // options for markdown-it-anchor
        anchor: { permalink: false },
        // options for markdown-it-toc
        toc: { includeLevel: [1, 2] },
        config: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it'))
        }
    },
    title       : 'Programming note',
    description : '각종 프로그래밍을 빠르게 시작하기 위한 노트정리',
	// base        : "/test1/", // root밑의 test1에 복사한다면...
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
