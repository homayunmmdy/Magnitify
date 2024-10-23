import { AllowedColors, AllowedInputType } from "@/types/AllowedOptions";

describe('AllowedColors', () => {
    it('should allow specified color values', () => {
      const validColors: AllowedColors[] = [
        'primary', 'secondary', 'neutral', 'accent', 'info', 'success', 'warning', 'error', 'ghost', 'link', null
      ];
  
      validColors.forEach(color => {
        expect(color).toBeDefined();
      });
    });
  
    it('should not allow unspecified color values', () => {
      // @ts-expect-error
      const invalidColor: AllowedColors = 'invalid';
      expect(invalidColor).toBeDefined(); // This line is just to avoid unused variable error
    });
  });
  
  describe('AllowedInputType', () => {
    it('should allow specified input types', () => {
      const validInputTypes: AllowedInputType[] = [
        'button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden',
        'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search',
        'submit', 'tel', 'text', 'time', 'url', 'week'
      ];
  
      validInputTypes.forEach(inputType => {
        expect(inputType).toBeDefined();
      });
    });
  
    it('should not allow unspecified input types', () => {
      // @ts-expect-error
      const invalidInputType: AllowedInputType = 'invalid';
      expect(invalidInputType).toBeDefined(); // This line is just to avoid unused variable error
    });
  });
  