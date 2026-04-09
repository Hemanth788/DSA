class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const topMin = this.getMin();
        this.stack.push({val: val, min: Math.min(val, topMin ?? val)});
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]?.val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1]?.min;
    }
}
