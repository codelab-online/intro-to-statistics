---
sidebar_position: 1
---

# Home page : Introduction

[Download the PDF version of this site.](https://raw.githubusercontent.com/codelab-online/compsys/ebooks/stats.codelib.online.pdf)
<embed src="https://raw.githubusercontent.com/codelab-online/compsys/ebooks/stats.codelib.online.pdf" class="application/pdf" width="1400px" height="1400px" />


# Hypothesis Testing

## The Language of Hypothesis Testing

Two types of Hypotheses.
* Null hypothesis (H0)
    * Usually a statement of “no effect”. Also, refer to the status quo (no change from the past, the old standard still correct).  
    * Either reject or do not reject H0  
    * For example, In our caffeinated drink example, the null hypothesis is as follows:
> H0: the population mean increase in pulse rate is the same for caffeinated and decaffeinated drinkers among young adults (or caffeinated drinks has no effect on pulse rate among young adults)
* Alternative hypothesis (H1)
    * Usually a statement of “an effect”. 
    * Also refers challenges to the status quo (something new is now occurring compared to the past).
    * If we reject H0 we conclude there is sufficient evidence to accept the alternative hypothesis. In our caffeinated drink example, the alternative hypothesis is as follows.
> H1: the population mean increase in pulse rate is higher for caffeinated drinkers among young adults (or caffeinated drinks increase the pulse rate among young adults)

## The concept of p-value
* We use the concept of p-value to reject or do not reject the null hypothesis.
* This p-value is always reported in scientific papers that use hypothesis testing.
* p-value is mostly denoted by p.
    * If p-value is small, we reject the null hypothesis and conclude that we have evidence to accept the alternative hypothesis.
    * If p-value is large, we do not reject the null hypothesis and conclude that we do not have evidence to accept the alternative hypothesis.
* The strength of evidence against the null hypothesis is determined by the magnitude
of the p-value.  

| p-value | Interpretation |
|:---------:|----------------|
| p<0.01 | strong evidence against H0 |  
| 0.01≤p<0.05 | moderate evidence against H0 |  
| 0.05≤p<0.1 | weak evidence against H0 |  
| p≥0.1 | no evidence against H0 |  

* The commonly used threshold is 0.05. If we find p < 0.05, then we say that the results are significant at 5% level of significance. 
* You will see in scientific journal articles _“theresults were found to be significant (p < 0.05)”_.  

