## Week 8 Tutorial - Part A

## Read data into RStudio

stroke = read.csv("Stroke.csv")

## Part a)

addmargins(table(stroke$Therapy, stroke$Outcome))

## Part b)

addmargins(table(stroke$Prestroke, stroke$Therapy))

chisq.test(table(stroke$Prestroke, stroke$Therapy))$expected


## Part c)

chisq.test(table(stroke$Prestroke, stroke$Therapy))

## Part d)

stroke$Outcome=ifelse(stroke$Outcome=="Yes", 1, 0)
summary(glm(Outcome ~ Time, data = stroke, 
            family = "binomial"))

## First predict ln(odds) when Time=4

lnodds=predict(glm(Outcome ~ Time, data = stroke, 
            family = "binomial"), newdata=data.frame(Time=4))


## Take the inverse lnodds to estimate odds
exp(lnodds)

