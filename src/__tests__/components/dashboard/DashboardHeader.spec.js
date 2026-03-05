import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'

describe('DashboardHeader', () => {
  it('renders selected period', () => {
    const wrapper = mount(DashboardHeader, {
      props: {
        period: '30d',
      },
    })

    expect(wrapper.find('select').element.value).toBe('30d')
  })

  it('emits update:period on select change', async () => {
    const wrapper = mount(DashboardHeader, {
      props: {
        period: '7d',
      },
    })

    await wrapper.find('select').setValue('90d')

    expect(wrapper.emitted('update:period')).toBeTruthy()
    expect(wrapper.emitted('update:period')[0]).toEqual(['90d'])
  })
})
