## Lecture 2


## Read data

survey = read.csv("M2Survey.csv")

## Categorical variable table

addmargins(table(survey$Town))

addmargins(prop.table(table(survey$Town)))

## Bar chart with proportions

library(lattice)

barplot(prop.table(table(survey$Town)))

## Bar chart with frequencies

barplot(table(survey$Town))

## Bar chart by sex and town

barplot(table(survey$Sex, survey$Town), legend.text = TRUE) ##Stack bar


TownSex = prop.table(table(survey$Sex, survey$Town)) ## First create proportions

barplot(TownSex, legend.text = TRUE, beside = TRUE, 
        ylab="Proportion", xlab = "Town")


## Two categorical variables

## Contingency tables

addmargins(table(survey$Sex, survey$Education))

## Contingency table with proportions

prop.table(table(survey$Sex, survey$Education), 1)


## Group bar chart for two categorical variables

barplot(table(survey$Sex, survey$Education), 
        beside=TRUE, legend=TRUE, xlab="Education", 
        ylab="Number of people", 
        col=c("beige", "orange"), 
        args.legend=list(x="topleft"))



## Histograms

hist(survey$Weight, main="Histogram for Weight", xlab="Weight")

hist(survey$Weight, col="yellow", main="Histogram for Weight", xlab="Weight", breaks = 12)


hist(survey$Forearm, col="blue", main="Histogram for Forearm Length", 
     xlab="Length")

### Remove the outlier and draw histogram again

outlier = which(survey$Forearm==260) 
survey1 = survey[-c(outlier), ]
hist(survey1$Forearm, col="blue", main="Histogram for Forearm Length", 
     xlab="Length - cm")


hist(survey$Weight, freq=FALSE, main="Histogram for Weight", xlab="Weight") ## Replace frequency by density


## Density plot

plot(density(survey$Weight), 
main="Density Plot for Weight", xlab = "Weight - kg")



## Descriptive summary measures

mean(survey$Weight)

aggregate(Height~Sex, data=survey, mean)

## Find percentiles

quantile(survey$Weight, probs =0.13)

quantile(survey$Weight, probs = c(.25, .5, .75))


## Qunatile plot

y=ppoints(length(survey$Weight)) ## To create quantiles
qqplot(y, survey$Weight, type="o", col="blue", 
       xlab="Quantile", ylab="Weight - kg", 
       main = "Qunatile Plot for Weight")
abline(v = 0.50, lty="dotted", col = "red")
abline(v = 0.25, lty="dashed", col = "green")
abline(v = 0.75, lty="dotted", col = "green")

## Five number summary - boxplot

fivenum(survey$Height)

boxplot(survey$Height)

boxplot(survey$Height, horizontal=TRUE, main = "Boxplot for Height", xlab="Height-cm")

boxplot(Weight~Sex, data=survey)


## Range
range(survey$Weight)

## IQR

IQR(survey$Weight)

## Standard deviation

sd(survey$Weight)

aggregate(Weight~Sex, data=survey, sd)

## Scatter plots

plot(survey$Height, survey$Weight, main="Scatter plot", xlab="Height-cm", ylab="Weight-Kg")

cor(survey$Height, survey$Weight)




## Change the category order

survey$Education = factor(survey$Education, levels=c("Primary", "Secondary", "University", "Postgrad"))

barplot(table(survey$Sex, survey$Education), 
        beside=TRUE, legend=TRUE, xlab="Education", 
        ylab="Number of people", 
        col=c("beige", "orange"), 
        args.legend=list(x="topleft"))



