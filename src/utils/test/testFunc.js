

export const findElementWithCLass = (component, clName) => {
    const ele = component.find(clName);
    return ele.length
}