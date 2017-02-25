
Last running task is never resolved after stopAll()

```
➜  bottleneck-example git:(master) node --version
v6.9.5
➜  bottleneck-example git:(master) ✗ npm --version
3.10.10
```

```
➜  bottleneck-example git:(master) ✗ npm run start

> bottleneck-example@1.0.0 start /Users/chris/github/bottleneck-example
> node index

limiter1.nbQueued: 6
limiter1.nbRunning: 2
limiter2.nbQueued: 6
limiter2.nbRunning: 2
limiter3.nbQueued: 6
limiter3.nbRunning: 2
limiter4.nbQueued: 6
limiter4.nbRunning: 2
limiter1 **** 1 ****
limiter2 **** 1 ****
limiter3 **** 1 ****
limiter4 **** 1 ****
limiter1 **1 done
limiter2 **1 done
limiter3 **1 done
limiter4 **1 done
limiter1 **** 2 ****
limiter3 **** 2 ****
limiter4 **** 2 ****
limiter2 **** 2 ****
limiter1 **2 done
limiter3 **2 done
limiter4 **2 done
limiter2 **2 done
limiter1.nbQueued: 4
limiter1.nbRunning: 2
limiter2.nbQueued: 4
limiter2.nbRunning: 2
limiter3.nbQueued: 4
limiter3.nbRunning: 2
limiter4.nbQueued: 4
limiter4.nbRunning: 2
**STOPPING ALL LIMITERS START**
limiter1.nbQueued: 4
limiter1.nbRunning: 2
limiter2.nbQueued: 4
limiter2.nbRunning: 2
limiter3.nbQueued: 4
limiter3.nbRunning: 2
limiter4.nbQueued: 4
limiter4.nbRunning: 2
**STOPPING ALL LIMITERS START**
**STOPPING ALL LIMITERS DONE**
limiter1.nbQueued: 0
limiter1.nbRunning: 2
limiter2.nbQueued: 0
limiter2.nbRunning: 2
limiter3.nbQueued: 0
limiter3.nbRunning: 2
limiter4.nbQueued: 0
limiter4.nbRunning: 2
**STOPPING ALL LIMITERS DONE**
limiter1 **** 3 ****
limiter2 **** 3 ****
limiter3 **** 3 ****
limiter4 **** 3 ****
limiter1 **3 done
limiter3 **3 done
limiter1.nbQueued: 0
limiter1.nbRunning: 1
limiter2.nbQueued: 0
limiter2.nbRunning: 1
limiter3.nbQueued: 0
limiter3.nbRunning: 1
limiter4.nbQueued: 0
limiter4.nbRunning: 1
limiter1.nbQueued: 0
limiter1.nbRunning: 1
limiter2.nbQueued: 0
limiter2.nbRunning: 1
limiter3.nbQueued: 0
limiter3.nbRunning: 1
limiter4.nbQueued: 0
limiter4.nbRunning: 1
^C
➜  bottleneck-example git:(master) ✗
```
