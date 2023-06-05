---
sidebar_position: 5
---

# Probability Distributions

## Binomial Distribution
* 2 outcomes, `success` and `failure`
* P(`success`) = p and is constant.
* A Bernoulli trial is a random process with only two possible outcomes. These outcomes are usually labelled “success” and “failure”.  
* Consider a series of independent Bernoulli trials and count thenumber of successes.
* Let X be the number of successes from n number of independent Bernoulli trials and P(Success) = p.
* Then we call X has a Binomial distribution with parameters n and p. 
* Mathematically represent:  

$$
\begin{equation*}
    X \sim Binom(n, p)
\end{equation*}
$$

Example:  

|  X||P(X=x) | R Code |
|--:|:----:|:------|-----|
|  0|X ~ Binom(3, 0.5)|0.125  |dbinom(0,3,0.5)|
|  1|X ~ Binom(3, 0.5)|0.375  |dbinom(1,3,0.5)|
|  2|X ~ Binom(3, 0.5)|0.375  |dbinom(2,3,0.5)|
|  3|X ~ Binom(3, 0.5)|0.125  |dbinom(3,3,0.5)|  

### `dbinom` vs `pbinom` 
* `dbinom(x, n, p)` returns the probability of the `x` discrete number of successes in `n` independent bernoulli trial with `p` probability of success.
    * `dbinom(x, size, prob, log = FALSE)`
* `pbinom(x, n, p, lower.tail = TRUE, log.p = FALSE)` returns the probability of the $X \leq x$ discrete number of successes in `n` independent bernoulli trial with `p` probability of success.
    * `pbinom(q, size, prob, lower.tail = TRUE, log.p = FALSE)`  

#### Usage
`dbinom(x, size, prob, log = FALSE)`  
`pbinom(q, size, prob, lower.tail = TRUE, log.p = FALSE)`  
`qbinom(p, size, prob, lower.tail = TRUE, log.p = FALSE)`  
`rbinom(n, size, prob)`  

##### Arguments  

| Arguments | Description |
|-----------|-------------|
|x, q | vector of quantiles. |
| p	| vector of probabilities. |
| n	| number of observations. If length(n) > 1, the length is taken to be the number required. |
| size	| number of trials (zero or more). |
| prob	| probability of success on each trial. |
| log, log.p | logical; if TRUE, probabilities p are given as log(p). |
| lower.tail | logical; if TRUE (default), probabilities are $P[X \le x]$, otherwise, $P[X > x]$. |  

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
* $sd(X) = 𝑛𝑝(1 − 𝑝)$  

_where_ `n` is the number of trials and `p` is the probability of `success` on each trial.  


## Normal Distribution

## 