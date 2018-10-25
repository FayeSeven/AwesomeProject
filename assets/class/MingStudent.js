/**
 * Created by 熙冰
 * 2018/10/25 20:39
 */
import Student from './Student';

export default class MingStudent extends Student {
    constructor() {
        super('小铭', '男', 18);
    }

    getDescription() {
        return '哈哈：' + super.getDescription();
    }
}
