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
# find the probability of 10 successes during 12 trials where the probability of
# success on each trial is 0.6
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

Let X be a continuous random variable. If `X` has a Normal distribution, we write $X \sim Normal (μ, σ)$.  

There is a rough rule to calculate the areas under Normal density curve.  
    * the area within 1 standard deviation of the mean is 68%
    * the area within 2 standard deviation of the mean is 95% 
    * the area within 3 standard deviation of the mean is 97%  

The area under the Normal density curve is 1.  

$$
\begin{align*}
    X &\sim Normal(\mu, \sigma) \\
    Z &= \frac{X−\mu}{\sigma} \\
    Z &\sim Normal(0, 1)
\end{align*}
$$

The Normal Distribution  

Description  

Density, distribution function, quantile function and random generation for the normal distribution with mean equal to mean and standard deviation equal to sd.  

Usage:  
``` R
dnorm(x, mean = 0, sd = 1, log = FALSE)
pnorm(q, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)
qnorm(p, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)
rnorm(n, mean = 0, sd = 1)
```

Arguments  

| Arguments | Description |
|-----------|-------------|
| x, q | vector of quantiles. |
| p	| vector of probabilities. |
| n	| number of observations. If length(n) > 1, the length is taken to be the number required. |
| mean | vector of means. |
| sd |	 vector of standard deviations. |
| log, log.p | logical; if TRUE, probabilities p are given as log(p). |
| lower.tail | logical; if TRUE (default), probabilities are $P[X \le x]$  otherwise, $P[X > x]$. |  

### `dnorm(x, mean, sd)`
``` R
dnorm(x, mean = 0, sd = 1, log = FALSE)
```

* The function dnorm returns the value of the probability density function (pdf) of the normal distribution given a certain random variable x, a population mean μ and population standard deviation σ. The syntax for using dnorm is as follows:  
* **Essentially gives the height of the probability density function at the value `x`**
* Usally not used, but `pnorm` and `qnorm` are more often used.  
* The following code illustrates a few examples of dnorm in action:  
``` R
#find the value of the standard normal distribution pdf at x=0
dnorm(x=0, mean=0, sd=1)
# [1] 0.3989423

#by default, R uses mean=0 and sd=1
dnorm(x=0)
# [1] 0.3989423

#find the value of the normal distribution pdf at x=10 with mean=20 and sd=5
dnorm(x=10, mean=20, sd=5)
# [1] 0.01079819
```

### `pnorm(q, mean, sd)`
``` R
pnorm(q, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)
```  

* The function pnorm returns the value of the cumulative density function (cdf) of the normal distribution given a certain random variable q, a population mean μ and population standard deviation σ. The syntax for using pnorm is as follows:  
* Put simply, **pnorm returns the area to the left of a given value x in the normal distribution**. If you’re interested in the **area to the right of a given value q, you can simply add the argument lower.tail = FALSE** `pnorm(q, mean, sd, lower.tail = FALSE)`.
* The following examples illustrates how to solve some probability questions using pnorm.  

Suppose the height of males at a certain school is normally distributed with a mean of μ=70 inches and a standard deviation of σ = 2 inches. Approximately what percentage of males at this school are taller than 74 inches?  

**Values Greater than a Number**
``` R
# find percentage of males that are taller than 74 inches in a population with
# mean = 70 and sd = 2
pnorm(74, mean=70, sd=2, lower.tail=FALSE)

# [1] 0.02275013
```
**Values Less than a Number**
``` R
# Additionally and unrelated to the data set above
# find percentage of otters that weight less than 22 lbs in a population with
# mean = 30 and sd = 5
pnorm(22, mean=30, sd=5)

# [1] 0.05479929
```

**Values Between Two Numbers**
``` R
# Percentage with values between two points
# find percentage of plants that are less than 14 inches tall, then subtract the
# percentage of plants that are less than 10 inches tall, based on a population
# with mean = 13 and sd = 2
pnorm(14, mean=13, sd=2) - pnorm(10, mean=13, sd=2)

# [1] 0.6246553
```

### `qnorm(p, mean, sd)`
``` R
qnorm(p, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)
```

* The function qnorm returns the value of the inverse cumulative density function (cdf) of the normal distribution given a certain random variable p, a population mean μ and population standard deviation σ. 
* The syntax for using qnorm is as follows:  
* Put simply, you can **use qnorm to find out what the Z-score is of the $p^{th}$ quantile of the normal distribution**.  

``` R
#find the Z-score of the 99th quantile of the standard normal distribution 
qnorm(.99, mean=0, sd=1)
# [1] 2.326348

#by default, R uses mean=0 and sd=1
qnorm(.99)
# [1] 2.326348

#find the Z-score of the 95th quantile of the standard normal distribution 
qnorm(.95)
# [1] 1.644854

#find the Z-score of the 10th quantile of the standard normal distribution 
qnorm(.10)
# [1] -1.281552
```

**VERY IMPORTANT**

**_Find Z-value of a variable x given $\mu$ and $\sigma$_**.

What is the Z-value of a variable with value 132, in a population with $\mu = 100$ and $\sigma = 15$.
``` R
# Get the percentage of population below the value.
# Answer is the percentile rank / score of the value
percent <- pnorm(132, mean=100, sd=15, lower.tail=TRUE);
percent
[1] 0.9835513

# Get the Z-score of a value at the $p^{th}$ percentile in a standard normal distribution
qnorm(percent)
[1] 2.133333

# The answer is Z-score of 2.133333 
```

### `rnorm(n, mean, sd)`
``` R
rnorm(n, mean = 0, sd = 1)
```
* The function rnorm generates a vector of normally distributed random variables given a vector length `n`, a population mean$\mu$ and population standard deviation $\sigma$. 

``` R
#generate a vector of 5 normally distributed random variables with mean=10 and sd=2
five <- rnorm(5, mean = 10, sd = 2)
five
# [1] 10.658117 8.613495 10.561760 11.123492 10.802768

#generate a vector of 1000 normally distributed random variables with mean=50 and sd=5
narrowDistribution <- rnorm(1000, mean = 50, sd = 15)

#generate a vector of 1000 normally distributed random variables with mean=50 and sd=25
wideDistribution <- rnorm(1000, mean = 50, sd = 25)

#generate two histograms to view these two distributions side by side, specify
#50 bars in histogram and x-axis limits of -50 to 150
par(mfrow=c(1, 2)) #one row, two columns
hist(narrowDistribution, breaks=50, xlim=c(-50, 150)) 
hist(wideDistribution, breaks=50, xlim=c(-50, 150))
```

### Poputation vs Sample Standard Deviation

$$
\begin{align*}
    sd(\overline{X}) &= \frac{\sigma}{\sqrt{n}} \\
    \sigma &= sd(\overline{X}) \cdot \sqrt{n}
\end{align*}
$$
where, `n` is the sample size.  
 
If $X \sim Normal(\mu, \sigma)$:  

$$
\begin{align*}
    Z &= \frac{X−\mu}{\sigma} \\
    Z \sim Normal(0, 1) \\
\end{align*}
$$

The distribution of sample means ($\overline{X}$):  

$$
\begin{align*}
    \overline{X} &\sim Normal(\mu, \frac{\sigma}{\sqrt{n}}) \\
    Z &= \frac{X - \mu}{\frac{\sigma}{\sqrt{n}}} \\
    Z &\sim Normal(0, 1)
\end{align*}
$$

This is true even if the population is not normally distributed for sufficiently large `n` sample size, **_Central Limit Theorem_** applies and the sample behaves like a normally distributed sample.  

## Sampling Distribution of the Sample Proportions

* The sample proportion ($\^{p}$)
* Again, consider our height of STAT1201 students. 
* Now define `p` as the population proportion of students whose height is less than or equal to 155cm.
* Following similar steps like we did for the sampling distribution of the sample mean we can find the distribution of the sample proportion.

$$
\^{p} = \frac{x}{n}
$$  

where `x` is the number of students in the sample whose height is less than or equal to 155cm.  

* If all possible samples of size `n` are selected from a binomial distribution, We can show that:  
    * $\mathbb{E}(\^{p}) = p$
    * sd$(\^{p}) = \sqrt{\frac{p \ (1-p)}{n}}$  

# Summary
## Binomial Distribution
### [Find the probability of `x` successes in `n` trials with `p` probability of success on each trial](/probability-distributions#dbinomx-size-prob)
### [Find the probability of `x` successes between 2 values, less than a value, or greater than a value in `n` trials with `p` probability of success on each trial](/probability-distributions#pbinomq-size-prob)
### [Find what discrete value `x` has a `q` probability of happening in `n` trials with `p` probability of success on each trial](/probability-distributions#qbinomq-size-prob)
### [Generate vector of `n` values from a binomial distribution, `size` trials and `prob` chance of success](/probability-distributions#rbinomn-size-prob)
## Normal Distribution
### [Finding percent of values less than or greated than a number and between 2 numbers](/probability-distributions#pnormq-mean-sd)
### [Finding the Z-value of a number, given $\mu$ and $\sigma$](/probability-distributions#qnormp-mean-sd)
### [Generate vector of `n` values from a normal distribution, with $\mu$ and $\sigma$](/probability-distributions#rnormn-mean-sd)
## Distribution of Proportion Variables
### [Sample mean and standard deviation for proportion values](/probability-distributions#sampling-distribution-of-the-sample-proportions)