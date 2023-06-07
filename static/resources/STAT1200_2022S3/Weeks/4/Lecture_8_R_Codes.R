## Lecture 8 R codes

## Read data file into RStudio
breath = read.csv("M8Breath.csv")

## Calculate sample correlation coefficient

cor(breath$Height, breath$BreathHeld)

## Correlation test

cor.test(breath$Height, breath$BreathHeld)

##Simple linear regression

##Scatter plot and least square line

plot(breath$Height, breath$BreathHeld, xlab="Height", 
     ylab="Breath holding Time", main="Scatter Plot")
abline(lm(breath$BreathHeld ~ breath$Height), col="red")

## Estimate least square line

bhh =lm(BreathHeld ~ Height, data=breath) ##bhh is a name for the estimated model. You can use any name as you wish.
summary(bhh) ## Gives summary table of the estimated least square line

##Instead of giving a name you can directly write

lm(BreathHeld ~ Height, data=breath)
summary(lm(BreathHeld ~ Height, data=breath))

## Predict Y for a given value of X (here when X=160)

predict(bhh, newdata=data.frame(Height=160))

## Coefficient of variation. To find SSL and SSR

summary(aov(BreathHeld ~ Height, data=breath))

##Confidence and prediction interval for Y

## Confidence interval

predict(lm(BreathHeld~Height, data=breath), 
        newdata=data.frame(Height = 160), interval ="confidence")

##Prediction interval

predict(lm(BreathHeld~Height, data=breath), 
        newdata=data.frame(Height = 160), interval ="prediction")

## SLR - Residual plots

## First calculate residuals and save them in the data file

breath$Resid=resid (lm(BreathHeld ~ Height, data=breath))

## The plot Residuals Vs X (Height here)

plot(Resid ~ Height, data=breath, 
     main = "Residuals Vs Height", 
     xlab="Height in cm", ylab="Residuals")
abline(h=0)

## The plot Residuals Vs fitted values (or predicted values)

breath$Fitted=predict(lm(BreathHeld ~ Height, data=breath))

plot(Resid ~ Fitted, data=breath, xlab="Fitted Values",
     main = "Residuals Vs Fitted Values",  ylab="Residuals")

## Density plot of residuals

library(lattice)
densityplot(breath$Resid, xlab="Residuals")

## Normal probability plot of residuals

qmath(breath$Resid, xlab="Z", ylab="Residuals", main = "Normal Probability Plot")

## Least square line - Breath holding time and Sex

summary(lm(BreathHeld ~ Sex, data=breath))

## Multiple linear regression plot with a dummy variable

xyplot(BreathHeld ~ Height, data=breath, auto.key = TRUE,
       groups = Sex, type = c("p", "r"))

## Multiple linear regression estimation

lm(BreathHeld ~ Height+ Sex, data=breath)

summary(lm(BreathHeld ~ Height+ Sex, data=breath))

## You can give a name to the model and use it 

bhhh = lm(BreathHeld ~ Height+ Sex, data=breath)

summary(bhhh)

## Predict breath holding time for a male with height=162cm

predict(bhhh, newdata=data.frame(Height=162, Sex="Male"))

## Include interaction term (Height*Sex)

bhhsi = lm(BreathHeld ~ Height*Sex, data=breath)
summary(bhhsi)
