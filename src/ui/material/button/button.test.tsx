import { configure, shallow } from "enzyme";
import * as ez from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import Button from "./";

configure({ adapter: new Adapter() });

test("button sets label", () => {

    ["save button", "cancel button", "   pre-space", "post space   "]
        .forEach((label: string) => {

            const buttonComponent = shallow(<Button label={label} />);

            const buttonSpan = buttonComponent.find("span").first();

            expect(buttonSpan).toBeDefined();
            expect(buttonSpan).not.toBeNull();
            expect(buttonSpan.text()).toEqual(label.trim());
        });
});

test("button sets default button label", () => {
    [" ", "  ", ""]
    .forEach((label: string) => {

        const buttonComponent = shallow(<Button label={label} />);

        const buttonSpan = buttonComponent.find("span").first();

        expect(buttonSpan).toBeDefined();
        expect(buttonSpan).not.toBeNull();
        expect(buttonSpan.text()).toEqual("BUTTON");
        expect(buttonSpan.text()).not.toEqual(label);
    });
});
