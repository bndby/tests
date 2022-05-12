function throttle(callback: Function, time: number) {
   return function (this: any, args: unknown) {
      let prevCall = this.lastCall;
      this.lastCall = Date.now();
      if(prevCall === undefined || (this.lastCall - prevCall) > time ) callback(args)
   }
} 
