import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ActivityPanel from '@/components/dashboard/ActivityPanel.vue'

const baseProps = {
  query: '',
  status: 'all',
  items: [
    { id: 1, title: 'Task one', status: 'new', owner: 'Ira', date: '2026-03-01' },
  ],
  loading: false,
  error: '',
}

describe('ActivityPanel', () => {
  it('emits query and status updates', async () => {
    const wrapper = mount(ActivityPanel, { props: baseProps })

    await wrapper.find('input').setValue('find me')
    await wrapper.find('select').setValue('done')

    expect(wrapper.emitted('update:query')).toBeTruthy()
    expect(wrapper.emitted('update:status')).toBeTruthy()
    expect(wrapper.emitted('update:query')[0]).toEqual(['find me'])
    expect(wrapper.emitted('update:status')[0]).toEqual(['done'])
  })

  it('shows empty state when items are empty', () => {
    const wrapper = mount(ActivityPanel, {
      props: { ...baseProps, items: [] },
    })

    expect(wrapper.find('.activity-empty').exists()).toBe(true)
  })

  it('shows error message when error is provided', () => {
    const wrapper = mount(ActivityPanel, {
      props: { ...baseProps, error: 'Failed to load' },
    })

    expect(wrapper.find('.error').text()).toContain('Failed to load')
  })
})

