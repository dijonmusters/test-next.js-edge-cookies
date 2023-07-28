import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

class MyClass {
  constructor(protected context: { cookies: () => ReadonlyRequestCookies }) {}

  public getCookie(name: string) {
    return this.context.cookies().get(name)?.value;
  }

  public setCookie(name: string, value: string) {
    return this.context.cookies().set(name, value);
  }
}

export default function getInstance(context: {
  cookies: () => ReadonlyRequestCookies;
}) {
  return new MyClass(context);
}
