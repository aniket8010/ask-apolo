export const baseUrl = `http://localhost:1337/api`

export const modifyResult = (data = []) => {
    return data.map(({ id, attributes }) => ({ id, ...attributes }))
}