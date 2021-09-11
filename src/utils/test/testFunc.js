

export const findElement = (component, element) => {
    //find an element either by element, id, class, or data-attr
    const ele = component.find(element);
    return ele.length
}

export const findElementText = (component, element) => {
    //find an element either by element, id, class, or data-attr
    const ele = component.find(element);
    return ele
}