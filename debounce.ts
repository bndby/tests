function debounce(callback: Function, time: number) {
  return function (this: any, args: unknown) {
    let prevCall = this.lastCall;
    this.lastCall = Date.now();
    if (prevCall && ((this.lastCall - prevCall) <= time)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => callback(args), time);
  }
}
