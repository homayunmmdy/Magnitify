import { PostsCashType, TimeLIneCashType, PublicationsCashType, ServicesCashType, SectionCashType, ContactsCashType, EmailCashType, TicketsCashType, TextAdvCashType } from "@/types/CashTypes";

describe('Custom Types', () => {
    describe('PostsCashType', () => {
      it('should have all required properties', () => {
        const post: PostsCashType = {
          _id: '1',
          body: 'Test body',
          createdAt: '2023-01-01',
          updatedAt: '2023-01-02',
          __v: 1,
          title: 'Test Post',
          imgurl: 'https://example.com/image.jpg',
          description: 'Test description',
          services: 'Test services',
          section: 'Test section',
          categories: [{ id: 1, name: 'Category 1' }]
        };
  
        expect(post).toHaveProperty('_id');
        expect(post).toHaveProperty('body');
        expect(post).toHaveProperty('createdAt');
        expect(post).toHaveProperty('updatedAt');
        expect(post).toHaveProperty('__v');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('imgurl');
        expect(post).toHaveProperty('description');
        expect(post).toHaveProperty('services');
        expect(post).toHaveProperty('section');
        expect(post).toHaveProperty('categories');
      });
    });
  
    describe('TimeLIneCashType', () => {
      it('should have all required properties except body', () => {
        const timeline: TimeLIneCashType = {
          _id: '1',
          createdAt: '2023-01-01',
          updatedAt: '2023-01-02',
          __v: 1,
          title: 'Test Timeline',
          date: '2023-01-03',
          description: 'Test description'
        };
  
        expect(timeline).toHaveProperty('_id');
        expect(timeline).toHaveProperty('createdAt');
        expect(timeline).toHaveProperty('updatedAt');
        expect(timeline).toHaveProperty('__v');
        expect(timeline).toHaveProperty('title');
        expect(timeline).toHaveProperty('date');
        expect(timeline).toHaveProperty('description');
        expect(timeline).not.toHaveProperty('body');
      });
    });
  
    describe('PublicationsCashType', () => {
      it('should have all required properties and optional properties', () => {
        const publication: PublicationsCashType = {
          _id: '1',
          body: 'Test body',
          createdAt: '2023-01-01',
          updatedAt: '2023-01-02',
          __v: 1,
          title: 'Test Publication',
          imgurl: 'https://example.com/image.jpg',
          description: 'Test description',
          author: 'Test Author',
          page_amount: 100,
          publisher: 'Test Publisher',
          publication_date: '2023-01-03',
          pdf_link: 'https://example.com/pdf',
          categories: [{ id: 1, name: 'Category 1' }]
        };
  
        expect(publication).toHaveProperty('_id');
        expect(publication).toHaveProperty('body');
        expect(publication).toHaveProperty('createdAt');
        expect(publication).toHaveProperty('updatedAt');
        expect(publication).toHaveProperty('__v');
        expect(publication).toHaveProperty('title');
        expect(publication).toHaveProperty('imgurl');
        expect(publication).toHaveProperty('description');
        expect(publication).toHaveProperty('author');
        expect(publication).toHaveProperty('page_amount');
        expect(publication).toHaveProperty('publisher');
        expect(publication).toHaveProperty('publication_date');
        expect(publication).toHaveProperty('pdf_link');
        expect(publication).toHaveProperty('categories');
      });
    });
  
    describe('ServicesCashType', () => {
      it('should have all required properties except body', () => {
        const service: ServicesCashType = {
          _id: '1',
          createdAt: '2023-01-01',
          updatedAt: '2023-01-02',
          __v: 1,
          name: 'Test Service',
          secid: 1,
          description: 'Test description',
          imgurl: 'https://example.com/image.jpg'
        };
  
        expect(service).toHaveProperty('_id');
        expect(service).toHaveProperty('createdAt');
        expect(service).toHaveProperty('updatedAt');
        expect(service).toHaveProperty('__v');
        expect(service).toHaveProperty('name');
        expect(service).toHaveProperty('secid');
        expect(service).toHaveProperty('description');
        expect(service).toHaveProperty('imgurl');
        expect(service).not.toHaveProperty('body');
      });
    });
  
    describe('SectionCashType', () => {
      it('should have all required properties except body', () => {
        const section: SectionCashType = {
          _id: '1',
          createdAt: '2023-01-01',
          updatedAt: '2023-01-02',
          __v: 1,
          name: 'Test Section',
          secid: 1
        };
  
        expect(section).toHaveProperty('_id');
        expect(section).toHaveProperty('createdAt');
        expect(section).toHaveProperty('updatedAt');
        expect(section).toHaveProperty('__v');
        expect(section).toHaveProperty('name');
        expect(section).toHaveProperty('secid');
        expect(section).not.toHaveProperty('body');
      });
    });
  
    describe('ContactsCashType', () => {
      it('should have all required properties except body', () => {
        const contact: ContactsCashType = {
          _id: '1',
          createdAt: '2023-01-01',
          updatedAt: '2023-01-02',
          __v: 1,
          name: 'Test Contact',
          email: 'test@example.com',
          message: 'Test message'
        };
  
        expect(contact).toHaveProperty('_id');
        expect(contact).toHaveProperty('createdAt');
        expect(contact).toHaveProperty('updatedAt');
        expect(contact).toHaveProperty('__v');
        expect(contact).toHaveProperty('name');
        expect(contact).toHaveProperty('email');
        expect(contact).toHaveProperty('message');
        expect(contact).not.toHaveProperty('body');
      });
    });
  
    describe('EmailCashType', () => {
      it('should have all required properties except body', () => {
        const email: EmailCashType = {
          _id: '1',
          createdAt: '2023-01-01',
          updatedAt: '2023-01-02',
          __v: 1,
          email: 'test@example.com'
        };
  
        expect(email).toHaveProperty('_id');
        expect(email).toHaveProperty('createdAt');
        expect(email).toHaveProperty('updatedAt');
        expect(email).toHaveProperty('__v');
        expect(email).toHaveProperty('email');
        expect(email).not.toHaveProperty('body');
      });
    });
  
    describe('TicketsCashType', () => {
      it('should have all required properties', () => {
        const ticket: TicketsCashType = {
          _id: '1',
          body: 'Test body',
          createdAt: '2023-01-01',
          updatedAt: '2023-01-02',
          __v: 1,
          title: 'Test Ticket',
          description: 'Test description',
          priority: 1,
          progress: 50,
          status: 'In Progress',
          startTime: '2023-01-03',
          endTime: '2023-01-04'
        };
  
        expect(ticket).toHaveProperty('_id');
        expect(ticket).toHaveProperty('body');
        expect(ticket).toHaveProperty('createdAt');
        expect(ticket).toHaveProperty('updatedAt');
        expect(ticket).toHaveProperty('__v');
        expect(ticket).toHaveProperty('title');
        expect(ticket).toHaveProperty('description');
        expect(ticket).toHaveProperty('priority');
        expect(ticket).toHaveProperty('progress');
        expect(ticket).toHaveProperty('status');
        expect(ticket).toHaveProperty('startTime');
        expect(ticket).toHaveProperty('endTime');
      });
    });
  
    describe('TextAdvCashType', () => {
      it('should have all required properties', () => {
        const textAdv: TextAdvCashType = {
          _id: '1',
          body: 'Test body',
          createdAt: '2023-01-01',
          updatedAt: '2023-01-02',
          __v: 1,
          textadvid: 1,
          advname: 'Test Ad',
          link: 'https://example.com'
        };
  
        expect(textAdv).toHaveProperty('_id');
        expect(textAdv).toHaveProperty('body');
        expect(textAdv).toHaveProperty('createdAt');
        expect(textAdv).toHaveProperty('updatedAt');
        expect(textAdv).toHaveProperty('__v');
        expect(textAdv).toHaveProperty('textadvid');
        expect(textAdv).toHaveProperty('advname');
        expect(textAdv).toHaveProperty('link');
      });
    });
  });