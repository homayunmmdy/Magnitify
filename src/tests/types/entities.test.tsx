import { FullHoverAnimationType, TitrType, FeaturesType, CollapseType } from "@/types/entities";
import React from 'react'
describe('Type Tests', () => {
    describe('FullHoverAnimationType', () => {
      it('should accept an object with text property', () => {
        const validObject: FullHoverAnimationType = { text: 'Hello' };
        expect(validObject).toBeDefined();
      });
  
      it('should accept an object with text and link properties', () => {
        const validObject: FullHoverAnimationType = { text: 'Hello', link: 'https://example.com' };
        expect(validObject).toBeDefined();
      });
    });
  
    describe('TitrType', () => {
      it('should accept an object with title and item properties', () => {
        const validObject: TitrType = { title: 'Test Title', item: 'text-center' };
        expect(validObject).toBeDefined();
      });
  
      it('should accept text-left and text-right for item property', () => {
        const validObject1: TitrType = { title: 'Test Title', item: 'text-left' };
        const validObject2: TitrType = { title: 'Test Title', item: 'text-right' };
        expect(validObject1).toBeDefined();
        expect(validObject2).toBeDefined();
      });
  
      it('should accept a custom string for item property', () => {
        const validObject: TitrType = { title: 'Test Title', item: 'custom-class' };
        expect(validObject).toBeDefined();
      });
  
      it('should accept an optional style property', () => {
        const validObject: TitrType = { title: 'Test Title', item: 'text-center', style: 'color: red;' };
        expect(validObject).toBeDefined();
      });
    });
  
    describe('FeaturesType', () => {
      it('should accept an object with id, title, icon, and description properties', () => {
        const validObject: FeaturesType = {
          id: 1,
          title: 'Feature 1',
          icon: <div>Icon</div>,
          description: 'This is a feature'
        };
        expect(validObject).toBeDefined();
      });
    });
  
    describe('CollapseType', () => {
      it('should accept an object with id, label, and body properties', () => {
        const validObject: CollapseType = {
          id: 1,
          label: 'Collapse 1',
          body: 'This is the content of the collapse'
        };
        expect(validObject).toBeDefined();
      });
    });
  });
  