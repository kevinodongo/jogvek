import { shallowMount } from "@vue/test-utils";
import Services from "@/views/Services.vue";

describe("Services.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Services, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
