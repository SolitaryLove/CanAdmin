import { computed, reactive, ref } from 'vue';
import type { Ref } from 'vue';
export function useTargetIndex(initialIndex: any) {
    const targetIndex = ref(initialIndex);
    function setTargetIndex(newIndex: any) {
        targetIndex.value = Number(newIndex);
        console.log(targetIndex.value);
    }
    return [
        targetIndex,
        setTargetIndex
    ]
}

interface dataType {
    id: number,
    phone_name: string,
    disabled: boolean
}
interface ArrayObjType {
    title: string,
    data: Array<dataType>,
}

export function useRightListData(initialData: [], checkedData:any) {
    const rightListData = ref<Array<dataType> | []>(initialData);
    function addRightListData(newData: Array<dataType>) {
        rightListData.value = [
            ...rightListData.value,
            ...newData
        ]
        checkedData.left = [];
    }
    function removeRightListData(newData: Array<dataType>) {
        newData.forEach(newItem => {
            rightListData.value = rightListData.value.filter(item => item.id !== newItem.id);
        });
        checkedData.right = [];
    }
    return [
        rightListData,
        addRightListData,
        removeRightListData
    ]
}

export function useCheckedData() {
    const checkedData = reactive<{
        left: Array<dataType>,
        right: Array<dataType>
    }>({
        left: [],
        right: [],
    });
    function addCheckedData(leftOrRight: string, item: any) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left.push(item);
                console.log(checkedData.left);
                break;
            case 'right':
                checkedData.right.push(item);
                break;
            default:
                break;
        }
    }
    function removeCheckedData(leftOrRight: any, id: any) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left = checkedData.left.filter(item => item.id != id);
                console.log(checkedData.left);
                break;
            case 'right':
                checkedData.right = checkedData.right.filter(item => item.id != id);
                break;
            default:
                break;
        }
    }
    return [
        checkedData,
        addCheckedData,
        removeCheckedData
    ]
}

export function useComputedData(data: Array<ArrayObjType>, targetIndex: any, rightListData: Ref<Array<dataType>>, checkedData:any) {
    const leftTitle = computed(() => data[targetIndex.value].title);

    const leftListData = computed(() => {
        const { data: currentData } = data[targetIndex.value];
        return currentData.filter(item => {
            if (!rightListData.value.find(({ id }) => item.id === id)) {
                return item;
            }
        });
    });

    const transferButtonDisabled=computed(()=>({
        left:checkedData.right.length===0,
        right:checkedData.left.length===0
    }))

    return {
        leftTitle,
        leftListData,
        transferButtonDisabled
    }
}