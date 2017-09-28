import { configure, shallow } from "enzyme";
import * as ez from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import Button from "./button";

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

test("button disable when click returns promise", async () => {
    const buttonComponent = shallow(<Button label={"label"} click={() => buttonActionPromise} />);

    const buttonActionPromise = new Promise<any>((resolve) => {

        expect(buttonComponent.props().disabled).toEqual(false);
        buttonComponent.simulate("click");
        expect(buttonComponent.props().disabled).toEqual(true);

        resolve(1);
    });

    await expect(buttonActionPromise).resolves.toEqual(1);

    expect(buttonComponent.props().disabled).toEqual(false);
});
