## Week 7 Tutorial - Part B

## Read the data file into RStudio

dace = read.csv("DaceFish.csv")


## b)

table(dace$Sulfate, dace$Oxygen)

## c) and d) - Obtain results from two-way ANOVA model
summary(aov(Fish ~ Sulfate*Oxygen, data=dace))


