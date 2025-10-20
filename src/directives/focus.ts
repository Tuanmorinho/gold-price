import type { Directive } from 'vue'

const focus: Directive<HTMLElement, void> = {
  mounted(el) {
    el.focus()
  }
}

export default focus


