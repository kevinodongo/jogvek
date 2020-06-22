import { shallowMount } from "@vue/test-utils";
import Discover from "@/components/Discover.vue";

describe("Discover.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Discover, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
