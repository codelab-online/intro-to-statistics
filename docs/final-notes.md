---
sidebar_position: 1000
---

# Final Notes

## Preliminaries

### [P value cut-off](/introduction#the-concept-of-p-value)

### d(test), p(test), q(test), r(test)
* d(test): used to get the value of the graph at that `x` value
    * For example, in binomial distribution `dbinom(1, 2, 0.5)` will yield `0.5` because there is a `0.5` change of getting 1 success in 2 trials with 0.5 chance of success each time.
    * In normal distribution `dnorm(0, mean=0, sd=1)` will yield about `0.39`. This is not useful for normal, t, and most distributions except for plotting.
``` R
dnorm(0, mean=0, sd=1)
[1] 0.3989423
```
* p(test): `ptest(q, ...)` - uses the probability density function to get the cummulative probability up to the `q` value given. Essentially gives the area under the curve up to `q`.
    * For example, in binomial distribution, `pbinom(2, 10, 0.5)` gives:
``` R
pbinom(2, 10, 0.5)
[1] 0.0546875
```

* q(test): `ptest(p, ...)` - reverse cummulative distribution
    * Gives the z-value or t-value that will contain `p` probability (area under the curve)
    * In binomial distribution, does the same thing with rounding off.

* r(test): `rtest(n, ...)` - generates a vector of `n` randomly generated values based on the underlying distribution.
    * `rbinom(3, 10, 0.5)` - generates 3 values with each one a result of random 10 trials with 0.5 change of success.
    * `rnorm(5, mean=100, sd= 10)` - generates 5 values with each one a result of drawing from a random distribution with mean of 100 and sd of 10.  

#### Examples:
* Binomial: `dbinom`, `pbinom`, `qbinom`, `rbinom`
* Normal: `dnorm`, `pnorm`, `qnorm`, `rnorm`
* T-test: `dt`, `pt`, `qt`, `rt`  

## Binomial Distribution Summary

### `dbinom(x, size, prob)`  

Put simply, `dbinom` finds the **probability of getting a certain number of successes (x) in a certain number of trials (size) where the probability of success on each trial is fixed (prob)**.  

``` R
#find the probability of 10 successes during 12 trials where the probability of
#success on each trial is 0.6
dbinom(x=10, size=12, prob=.6)
# [1] 0.06385228
```

### `pbinom(q, size, prob)`

Put simply, **pbinom returns the area to the left of a given value q in the binomial distribution**. If you’re interested in the **area to the right of a given value q, you can simply add the argument `lower.tail = FALSE`** as in:  

`pbinom(q, size, prob, lower.tail = FALSE)`

``` R
#find the probability of more than 2 successes during 5 trials where the
#probability of success on each trial is 0.5
pbinom(2, size=5, prob=.5, lower.tail=FALSE)
# [1] 0.5

#find the probability of less then or equal to 1 success during 5 trials where the
#probability of success on each trial is 0.5
pbinom(1, size=5, prob=.5, lower.tail=TRUE)
# [1] 0.1875
```

### `qbinom(q, size, prob)` 

The function qbinom returns the value of the inverse cumulative density function (cdf) of the binomial distribution given a certain random variable q, number of trials (size) and probability of success on each trial (prob).  

Put simply, you can use **qbinom to find out the $p^{th}$ quantile of the binomial distribution** or **what is expected to happen with probability `p`**.  

``` R
#find the 10th quantile of a binomial distribution with 10 trials and prob
#of success on each trial = 0.4
qbinom(.10, size=10, prob=.4)
# [1] 2

#find the 40th quantile of a binomial distribution with 30 trials and prob
#of success on each trial = 0.25
qbinom(.40, size=30, prob=.25)
# [1] 7
```

### `rbinom(n, size, prob)`  

The function **rbinom generates a vector of binomial distributed random variables given a vector length n, number of trials (size) and probability of success on each trial (prob)**. The syntax for using rbinom is as follows:  

``` R
#generate a vector that shows the number of successes of 10 binomial experiments with
#100 trials where the probability of success on each trial is 0.3.
results <- rbinom(10, size=100, prob=.3)
results
# [1] 31 29 28 30 35 30 27 39 30 28

#find mean number of successes in the 10 experiments (compared to expected
#mean of 30)
mean(results)
# [1] 32.8

#generate a vector that shows the number of successes of 1000 binomial experiments
#with 100 trials where the probability of success on each trial is 0.3.
results <- rbinom(1000, size=100, prob=.3)

#find mean number of successes in the 100 experiments (compared to expected
#mean of 30)
mean(results)
# [1] 30.105
```

### Important Equations ($\mu$ and $\sigma$ etc)

* $X \sim Binom(n, p)$ 
* $Mean = E(X) = np$ 
* $Var(X) = np(1-p)$
* $sd(X) = \sqrt{𝑛𝑝(1 − 𝑝)}$  

_where_ `n` is the number of trials and `p` is the probability of `success` on each trial.  
