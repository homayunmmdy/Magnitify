import { ButtonType, InputType, TextareaType } from "../../types/FormFiledType";
import React from 'react'
 
describe("FormFiled Types", () => {
  describe("Button Type", () => {
    it("should allow valid button properties", () => {
      const validButton: ButtonType = {
        title: "Click Me",
        color: "btn-primary",
        type: "submit",
        disabled: false,
        onClick: () => {},
        id: "test-button",
        style: "custome-style",
        ariaLabel: "Test Button",
        icon: <span>1</span>,
      };

      expect(validButton).toBeDefined();
    });

    it("should not allow invalid color", () => {
      const invalidButton: ButtonType = {
        title: "Invalid",
        //@ts-expect-error
        color: "btn-invalid",
      };

      expect(invalidButton).toBeDefined();
    });
  });

  describe('Input Type' , () => {
    it('should allow valid input properties', () => {
        const validInput: InputType = {
            type: 'text',
            color: 'input-secondary',
            placeholder: "Enter text",
            onChange: (e) => {},
            required: true,
            label: 'Text Input',
            id : 'test-input',
            style: "custome-style",
            ariaLabel: 'Test Input'
        };

        expect(validInput).toBeDefined()
    });

    it('should not allow invalid input type', () => {
        const invalidInput : InputType = {
            //@ts-expect-error
            type : 'invalid'
        }

        expect(invalidInput).toBeDefined()
    })

    describe('Textarea Type', () => {
        it('should allow valid textarea properties', () => {
            const validTextarea: TextareaType = {
                name : 'description',
                rows: 4,
                value :'Sample Text',
                color: 'textarea-success',
                placeholder: 'Enter description',
                onChange: (e) => {},
                label: 'description',
                required: false,
                id : 'test-testarea',
                style : 'custome-style',
                ariaLabel: 'Test Textarea'
            };

            expect(validTextarea).toBeDefined()
        });

        it('should not allow invalid color', () => {
            const invalidTextarea: TextareaType = {
                //@ts-expect-error
                color : 'textarea-invalid'
            };

            expect(invalidTextarea).toBeDefined()
        })
    })
  })
});
