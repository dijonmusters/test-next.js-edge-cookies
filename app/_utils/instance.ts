import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import wait from "./wait";

class MyClass {
  constructor(protected context: { cookies: () => ReadonlyRequestCookies }) {}

  public async getCookie(name: string) {
    await wait(1000);
    return this.context.cookies().get(name)?.value;
  }

  public async setCookie(name: string, value: string) {
    await wait(1000);
    return this.context.cookies().set(name, value);
  }

  public async deleteCookie(name: string) {
    await wait(1000);
    return this.context.cookies().set(name, "", {
      maxAge: 0,
    });
  }
}

export default function getInstance(context: {
  cookies: () => ReadonlyRequestCookies;
}) {
  return new MyClass(context);
}
