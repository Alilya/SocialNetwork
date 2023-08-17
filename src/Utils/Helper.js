export const updateObjectInArray = (items,itemId, 
    objPropName, newObjProps)=>{
    let res = items.map((u) => {
      if (u[objPropName] === itemId) {
        return { ...u, ...newObjProps };
      }
      return u;
    })
  return res;
}