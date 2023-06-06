---
sidebar_position: 7
---

# Statistical Inference

## Confidence Interval estimation

### Confidence Interval Estimates
* CI is a range of values that is likely to include the population parameter with a certain level of confidence.
* Has a lower limit (LL) and an upper limit (UL).
* Takes into consideration the variation in sample statistics from sample to sample.
* Examples:
    * 95% CI for 𝜇 implies that 95% of all confidence intervals, constructed using all possible samples will contain the population mean.
    * 99% CI for 𝜇 implies that 99% of all confidence intervals, constructed using all possible samples will contain the population mean.

### Estimate / Formula for CI
* point estimate ± Margin of Error 
* MOE = Margin of Error

Example: 
* 95% CI for the population mean ($\mu$) is written as $\overline{X} \pm MOE$.
* That is, $LL = \overline{X} - MOE$ and $UL = \overline{X} + MOE$

Further Example:
* In case of 95% CI for the population mean;  

$$\overline{X} \pm Z^* \frac{\sigma}{\sqrt{n}}$$  
$MOE = Z^* \frac{\sigma}{\sqrt{n}}$ where $Z^*$ is called the critical value (Z scores that have a certain probability to their right).  

The value $Z^*$ depends on the level of confidence (LOC).  

When we find $Z^*$ we need to deduct half of (1-LOC) since the CI is spread around the mean with equal lengths to the left and right.  

* For 90% CI, $Z^*$ = qnorm(0.95) = 1.644854 
* For 95% CI, $Z^*$ = qnorm(0.975) = 1.959964 
* For 99% CI, $Z^*$ = qnorm(0.995) = 2.575829  

Note —> (1-LOC) is called the level of significance ($\alpha$). We will use this in hypothesis testing.  

**However**

### Population Statistics Not Usually Known

* However, in most of the cases, we don’t know $\sigma$, the population standard deviation. 
* Using sample information we can find sample standard deviation ($s$).
* The estimated standard deviation for the sample mean:  

$$
\begin{equation*}
    \frac{s}{\sqrt{n}} 
\end{equation*}
$$

* $\displaystyle \frac{s}{\sqrt{n}}$ is called the standard error of the sample mean.  

$$
\begin{equation*}
    se(\overline{x}) = \frac{s}{\sqrt{n}}
\end{equation*}
$$


## T Distribution

The Student t Distribution
* Description : Density, distribution function, quantile function and random generation for the t distribution with df degrees of freedom (and optional non-centrality parameter ncp).

* Usage

``` R
dt(x, df, ncp, log = FALSE)
pt(q, df, ncp, lower.tail = TRUE, log.p = FALSE)
qt(p, df, ncp, lower.tail = TRUE, log.p = FALSE)
rt(n, df, ncp)
```

* Arguments
    * x, q: vector of quantiles.
    * p: vector of probabilities.
    * n: number of observations. If length(n) > 1, the length is taken to be the number required.
    * df: degrees of freedom (> 0>0, maybe non-integer). df = Inf is allowed.
    * ncp: non-centrality parameter $\delta$; currently except for rt(), only for abs(ncp) <= 37.62. If omitted, use the central t distribution.
    * log, log.p: logical; if TRUE, probabilities p are given as log(p).
    * lower.tail: logical; if TRUE (default), probabilities are $P[X \le x]$, otherwise, $P[X > x]$.

## One sample t-test / T distribution

### Definition

* $\displaystyle T \sim t_{(n-1)}$
* $\displaystyle T = \frac{\overline{X} - \mu}{\frac{s}{\sqrt{n}}}$
* In general, `t` values are calculated from sample size of `n` will have the $t_{(n-1)}$ distribution. $(n-1)$ is called degrees of freedom of the t- distribution.  

### Confidence Interval

* Thus CI for the population mean when $\sigma$ is unknown is: $\displaystyle \overline{x} \pm t^*_{(n-1)} \cdot \frac{s}{\sqrt{n}}$
* $t^*_{(n-1)}$ is the number of standard errors required for the desired level of confidence in the $t_{(n-1)}$ distribution.
* Example:
> You are taking a random sample of 16 lizards living in one Island in Australia. The sample mean and standard deviation are 45cm and 8.4cm. Estimate the 95% CI for the mean length of all lizards living in that Island.
* Answer:  
``` R
# Find the t-score of the 97.5th quantile of the Student t distribution with df = 15 ( n - 1) to get 95% CI.
qt(0.975, 15)
[1] 2.13145

# Get the standard error of the sample mean
8.4 / sqrt(15)
[1] 2.168871

# Get the Upper Limit of the Estimate
45 + qt(0.975, 15) * (8.4 / sqrt(15))
[1] 49.62284

# Get the Lower Limit of the Estimate
45 - qt(0.975, 15) * (8.4 / sqrt(15))
[1] 40.37716
```

#### Using `t.test` on `mucus`.  

``` R
t.test(Cells ~ Group, mucus)

	Welch Two Sample t-test

data:  Cells by Group
t = -3.0502, df = 17.374, p-value = 0.007101
alternative hypothesis: true difference in means between group Exposed and group Untreated is not equal to 0
95 percent confidence interval:
 -5.916971 -1.083029
sample estimates:
  mean in group Exposed mean in group Untreated 
                   11.0                    14.5 
```

### Choosing Sample Size

* Consider the example we discussed to calculate the 95% CI for $\mu$ when $\sigma$ is known (given below again).
* You are taking a random sample of 16 lizards living in one Island in Australia. 
* The sample mean body length of those is 45cm. From a previous research the population standard deviation of the body length is known and it is 8cm. What is the 95% CI for the mean body length of lizards living in this island?
* The calculated MOE was 3.919928 That is, $Z^* \frac{\sigma}{\sqrt{n}}$ = 3.919928
``` R
# Get the Z-value for 97.5th percentile to get 95 % CI
qnorm(0.975)
[1] 1.959964

# Multiple Z-value by standard error
qnorm(0.975) * (8/sqrt(16))
[1] 3.919928
```

* Now suppose that you need to reduce the MOE to 2cm. What is the sample size need to construct 95% CI for $\mu$?
* $\displaystyle MOE = Z^* \frac{\sigma}{\sqrt{n}}$
* Rearranging: $\displaystyle n = \left(\frac{Z^* \cdot \sigma}{MOE}\right)^2$
* Thus, $\displaystyle n = \left( \frac{1.959964 * 8}{2} \right)^2$

``` R
((qnorm(0.975) * 8)/2)^2
[1] 61.46334
```
* n = 61.46334.
* Add one to the integer part irrespective of the value decimal point to obtain the required sample size. This is because MOE must be less than or equal to a specified value.
* The required sample size = 62.
* Check by yourself the value of MOE if n = 61 and if n = 62  


## Type I and Type II errors in hypothesis testing
## Power of an experiment  

