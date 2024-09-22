// 获取assets静态资源
export const getAssetsFile = (url: string) => {
    // import.meta.url 是一个 ESM 的原生功能，会暴露当前模块的 URL。将它与原生的 URL 构造器组合使用，
    // 在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL
    return new URL(`../../src/assets/images/${url}`, import.meta.url).href
}