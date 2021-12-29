import { shallowMount } from "@vue/test-utils";
import { createWebHistory } from "vue-router";
import createRouter from "../../router";

// Component
import Menu from "./Menu";

const router = createRouter(createWebHistory());

test("Not an empty menu", async () => {
  router.push("/");

  await router.isReady();

  const wrapper = shallowMount(Menu, {
    global: { plugins: [router] }
  });

  expect(wrapper.html()).not.toBe('<ul class="menu" role="menu"></ul>');
});