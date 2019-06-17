function loadImage(url: string): any{
    return new Promise((resolve: Function, reject: Function): void => {
        const img = new Image()
        img.addEventListener('load', (): any => resolve(img))
        img.addEventListener('error', (): any => reject(new Error(`Failed to load image from ${url}`)))
        img.src = url
    })
}

export {loadImage}