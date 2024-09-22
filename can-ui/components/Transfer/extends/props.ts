interface dataType {
    id: number,
    phone_name: string,
    disabled: boolean
}
interface ArrayObjType {
    title: string,
    data: Array<dataType>,
}

export default {
    data: {
        type: Array<ArrayObjType>,
        default: () => []
    },
    rightTitle: {
        type: String,
        default: '已选择'
    }
}