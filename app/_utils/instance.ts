class MyClass {
  constructor(protected context: { cookies: () => any }) {}

  protected getCookie(name: string) {
    return this.context.cookies().get(name)?.value;
  }

  protected setCookie(name: string, value: string) {
    return this.context.cookies().set(name, value);
  }
}

export default function getInstance(context: { cookies: () => any }) {
  return new MyClass(context);
}
