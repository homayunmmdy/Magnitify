import {
    POST_API_URL,
    SECTIONS_API_URL,
    SERVICES_API_URL,
    CONTACTS_API_URL,
    EMAIL_API_URL,
    TEXTADV_API_URL,
    TICKETS_API_URL,
    TIMELINE_API_URL,
    CONTRIBUTION_API_URL,
    COMMENTS_API_URL
  } from '../../config/apiConstants' 
  
  describe('API Constants', () => {
    describe('URL Format', () => {
      const apiConstants = {
        POST_API_URL,
        SECTIONS_API_URL,
        SERVICES_API_URL,
        CONTACTS_API_URL,
        EMAIL_API_URL,
        TEXTADV_API_URL,
        TICKETS_API_URL,
        TIMELINE_API_URL,
        CONTRIBUTION_API_URL,
        COMMENTS_API_URL
      }
  
      Object.entries(apiConstants).forEach(([name, url]) => {
        it(`${name} should start with /api/`, () => {
          expect(url).toMatch(/^\/api\//)
        })
  
        it(`${name} should not end with a slash`, () => {
          expect(url).not.toMatch(/\/$/)
        })
  
        it(`${name} should not contain any spaces`, () => {
          expect(url).not.toMatch(/\s/)
        })
      })
    })
  
    describe('Individual URL Values', () => {
      it('should have correct POST_API_URL', () => {
        expect(POST_API_URL).toBe('/api/posts')
      })
  
      it('should have correct SECTIONS_API_URL', () => {
        expect(SECTIONS_API_URL).toBe('/api/sections')
      })
  
      it('should have correct SERVICES_API_URL', () => {
        expect(SERVICES_API_URL).toBe('/api/services')
      })
  
      it('should have correct CONTACTS_API_URL', () => {
        expect(CONTACTS_API_URL).toBe('/api/contacts')
      })
  
      it('should have correct EMAIL_API_URL', () => {
        expect(EMAIL_API_URL).toBe('/api/emails')
      })
  
      it('should have correct TEXTADV_API_URL', () => {
        expect(TEXTADV_API_URL).toBe('/api/textadv')
      })
  
      it('should have correct TICKETS_API_URL', () => {
        expect(TICKETS_API_URL).toBe('/api/tickets')
      })
  
      it('should have correct TIMELINE_API_URL', () => {
        expect(TIMELINE_API_URL).toBe('/api/time')
      })
  
      it('should have correct CONTRIBUTION_API_URL', () => {
        expect(CONTRIBUTION_API_URL).toBe('/api/contribution')
      })
  
      it('should have correct COMMENTS_API_URL', () => {
        expect(COMMENTS_API_URL).toBe('/api/comments')
      })
    })
  
    describe('URL Uniqueness', () => {
      it('should have unique URLs for all endpoints', () => {
        const urls = [
          POST_API_URL,
          SECTIONS_API_URL,
          SERVICES_API_URL,
          CONTACTS_API_URL,
          EMAIL_API_URL,
          TEXTADV_API_URL,
          TICKETS_API_URL,
          TIMELINE_API_URL,
          CONTRIBUTION_API_URL,
          COMMENTS_API_URL
        ]
        const uniqueUrls = new Set(urls)
        expect(uniqueUrls.size).toBe(urls.length)
      })
    })
  })
  
  