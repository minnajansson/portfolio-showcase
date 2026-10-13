import { describe, expect, it } from 'vitest'
import { galleryProjects } from '@/data/portfolio'

describe('requested gallery order', () => {
  it('starts with Karolinska and marketing, followed by Huddinge and WordPress', () => {
    expect(galleryProjects.slice(0, 4).map(project => project.slug)).toEqual([
      'inskolningsapp', 'sodersrunners', 'aterbruk-huddinge', 'webbplats-i-wordpress',
    ])
  })
})